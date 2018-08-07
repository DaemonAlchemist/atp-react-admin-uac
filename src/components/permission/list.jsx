
import React from "react";
import {Col, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import {connect} from 'react-redux';
import {Icon} from 'react-font-awesome-5';

import NewPermissionForm from "../../containers/permission/form/create";
import {DeleteButton, radio} from 'atp-ui';
import {merge, keys, get, map, remove} from 'atp-pointfree';

const hierarchify = ({items, separator = "."}) => items
    .map(item => item.name.split(separator).reverse().reduce((obj, index) => ({[index]: obj}), {__leaf__: true, ...item}))
    .reduce(merge);

const PermissionList = connect(
    (state, {items, level}) => ({
        isSelected: key => radio.value(get(state), `permissionHierarchy${level}`) === key,
        selectedItem: radio.value(get(state), `permissionHierarchy${level}`),
        isLeaf: key => items[key].__leaf__,
        hasSubNodes: key => keys(remove(['id', 'name', 'version', '__leaf__'])(items[key])).length > 0,
        subNodes: key => remove(['id', 'name', 'version', '__leaf__'])(items[key])
    }),
    (dispatch, {level}) => ({
        select: key => () => dispatch(radio.set(`permissionHierarchy${level}`, key)),
        clear: () => dispatch(radio.clear(`permissionHierarchy${level}`)),
        remove: name => () => {alert(`delete ${name}`);}
    })
)(({items, level, isSelected, selectedItem, isLeaf, hasSubNodes, subNodes, select, clear, remove, onDelete}) => [
    <Col xs={3}>
        <ListGroup>
            {level === 0 &&
                <ListGroupItem>
                    <NewPermissionForm/>
                </ListGroupItem>
            }
            {keys(items).sort().map(key =>
                <ListGroupItem bsStyle={isSelected(key) ? "info" : "regular"} onClick={isSelected(key) ? clear : select(key)} >
                    {isLeaf(key) ? <Icon.Key /> : <Icon.Folder />}
                    &nbsp;{isLeaf(key) ? items[key].name : key}
                    <div style={{float: "right"}}>
                        {isLeaf(key) &&
                            <DeleteButton
                                id={`permissionDeleteBtn${items[key].id}`}
                                onClick={onDelete(items[key].id)}
                                message={`Are you sure you want to delete the permission ${items[key].name}`}
                                width="250px"
                            />
                        }
                        {hasSubNodes(key) &&
                            <Button bsStyle="link" bsSize="xsmall">
                                <Icon.ChevronRight/>
                            </Button>
                        }
                        {!hasSubNodes(key) &&
                            <Button bsStyle="link" bsSize="xsmall">
                                <Icon.ChevronRight style={{visibility: "hidden"}}/>
                            </Button>
                        }
                    </div>
                </ListGroupItem>
            )}
        </ListGroup>
    </Col>,
    selectedItem && items[selectedItem] &&
        <PermissionList
            items={subNodes(selectedItem)}
            level={level+1}
            onDelete={onDelete}
        />
]);

export default props =>
    <Col xs={12} sm={8} md={9} lg={10}>
        <PermissionList onDelete={props.onDelete} items={hierarchify({items: props.permissions})} level={0} />
    </Col>;
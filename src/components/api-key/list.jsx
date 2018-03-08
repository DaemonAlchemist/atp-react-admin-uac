
import React from 'react';
import {Panel, Button, Table} from 'react-bootstrap';
import {Icon} from 'react-font-awesome-5';

export default ({userId, keys, onCreate, onDelete, onCopy}) =>
    <Panel>
        <Panel.Heading>
            <Icon.Key /> API Keys
            <Button bsStyle="link" onClick={onCreate} style={{float: "right", marginTop: "-3px", marginRight: "-3px"}}>
                <Icon.Plus /> Create
            </Button>
        </Panel.Heading>
        <Table>
            <tbody>
                {keys && keys.map(key =>
                    <tr>
                        <td>
                            {key.apiKey}
                            <Button bsStyle="link" onClick={onDelete(key.id)} style={{float: "right"}}>
                                <span className="text-danger"><Icon.Trash /> Revoke</span>
                            </Button>
                            <Button bsStyle="link" onClick={onCopy(key.apiKey)} style={{float: "right"}} title="Copy key to clipboard">
                                <Icon.Copy /> Copy
                            </Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    </Panel>
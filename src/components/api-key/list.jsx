
import React from 'react';
import {Panel, Button, Table} from 'react-bootstrap';
import {Icon} from 'react-font-awesome-5';
import {DeleteButton} from 'atp-ui';

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
                            <div style={{float: "right"}}>
                                <Button bsStyle="link" onClick={onCopy(key.apiKey)} title="Copy key to clipboard">
                                    <Icon.Copy /> Copy
                                </Button>
                                <DeleteButton
                                    id={`apiKeyDeleteBtn${key.id}`}
                                    onClick={onDelete(key.id)}
                                    text="Revoke"
                                    message="Are you sure you want to revoke this API key?  This cannot be undone."
                                    confirmText="Revoke"
                                    width="250px"
                                />
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    </Panel>
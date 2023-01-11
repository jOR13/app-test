import ForgeUI, {
    render, ProjectPage, Fragment, Text, Button, Macro, Table, Head, Cell, Row
} from '@forge/ui';

const issues = [
    {
        key: 'XEN-1',
        status: 'In Progress',
    },
    {
        key: 'XEN-2',
        status: 'To Do',
    },
];

const App = () => {
    return (
        <Fragment>
            <Text>UI Components</Text>
            <Text>Button</Text>
            <Button
                text="Sign up"
                onClick={() => {
                    alert('You clicked the button!');
                }}
            />
            <Text>Table</Text>
            <Table>
                <Head>
                    <Cell>
                        <Text>Issue Key</Text>
                    </Cell>
                    <Cell>
                        <Text>Status</Text>
                    </Cell>
                </Head>
                {issues.map(issue => (
                    <Row>
                        <Cell>
                            <Text>{issue.key}</Text>
                        </Cell>
                        <Cell>
                            <Text>{issue.status}</Text>
                        </Cell>
                    </Row>
                ))}
            </Table>
        </Fragment>
    );
};

export const run = render(
    <ProjectPage>
        <App />
    </ProjectPage>
);


import ForgeUI, {
     
    render,
    Fragment,
    Text,
    Button,
    Form,
    TextField,
    Select,
    Option,
    Checkbox,
    Radio,
    RadioGroup,
    TextArea,
    IssuePanel
} from '@forge/ui';

const Form = () => {


    return (
        <Fragment>
            <Text>Form</Text>
            <Form onSubmit={async (formData) => {
                console.log(formData);
            }}>
                <TextField name="summary" label="Summary" defaultValue="This is a default value" />
                <Select name="issueType" label="Issue Type">
                    <Option value="bug">Bug</Option>
                    <Option value="task">Task</Option>
                    <Option value="story">Story</Option>
                </Select>
                <Checkbox name="isPublic" label="Make this issue public" />
                <RadioGroup name="priority" label="Priority">
                    <Radio value="low">Low</Radio>
                    <Radio value="medium">Medium</Radio>
                    <Radio value="high">High</Radio>
                </RadioGroup>
                <TextArea name="description" label="Description" />
                <Button text="Create Issue" />
            </Form>
        </Fragment>
    );
};

export const run = render(<Form />);

// forge form component
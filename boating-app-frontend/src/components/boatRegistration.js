import { Button, Form, Input, Select } from 'antd';
import registerBoat from '../logic/registerBoat';

function BoatRegistration({ onCreate }) {

    const [form] = Form.useForm();

    const createNewBoat = async (values) => {

        const isSailboat = values.sail === 'yes' ? true : false

        const boatInfo = {
            name: values.name,
            flag: values.flag,
            regNumber: values.regNumber,
            sail: isSailboat,
            length: values.length,
            beam: values.beam,
            draft: values.draft

        }
        try {
            await registerBoat(boatInfo)
            await onCreate();
        } catch (error) {
            alert(error.message)
        }
    }

    const { Option } = Select;

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 20,
            },
            sm: {
                span: 6,
            },
        },
        wrapperCol: {
            xs: {
                span: 20,
            },
            sm: {
                span: 12,
            },
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    return (
        <div>
            <Form
                {...formItemLayout}
                form={form}
                name="registerboat"
                onFinish={createNewBoat}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your boat name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="flag"
                    label="Flag"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your boat flag!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="regNumber"
                    label="Registration Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your registration number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="sail"
                    label="Sail"
                    rules={[
                        {
                            required: true,
                            message: 'Please select an option!',
                        },
                    ]}
                >
                    <Select placeholder="Sail">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="length"
                    label="length"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter boat length!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="beam"
                    label="Beam (in mts)"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter boat beam!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="draft"
                    label="Draft (in mts)"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter boat draft!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register boat
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )

}

export default BoatRegistration
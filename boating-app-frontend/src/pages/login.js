import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

function Login() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <main className="h-screen w-screen flex flex-row items-center justify-center">
            <div className="w-5/12 h-screen flex flex-col justify-center items-center bg-gray-800">
                <div className="login-form bg-bone flex p-4">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>


                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button w-full">
                                Log in
                            </Button>

                            <Button type="link" block>
                                register now!
                            </Button>
                        </Form.Item>
                    </Form>

                </div>
            </div>
            <div className="login-background-image w-7/12 h-screen bg-cover bg-center" style={{ backgroundImage: "url(/login/background.jpg)" }}></div>
        </main>
    )
}

export default Login
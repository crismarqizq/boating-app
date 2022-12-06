import { useContext } from 'react'
import authenticateUser from '../logic/authenticateUser';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import UserContext from '../UserContext';
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import axios from 'axios';

function Login() {

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate()

    const onLoginFinish = async (values) => {
        const authenticationData = {
            email: values.email,
            password: values.password
        }

        try {
            const tokenReponse = await authenticateUser(authenticationData)
            const tokenString = tokenReponse.token
            const decodedToken = jwt_decode(tokenString)

            console.log('decoded', decodedToken)

            setUser({
                _id: decodedToken.sub,
                email: decodedToken.email,
                name: decodedToken.name,
                token: tokenString
            })


            console.log('INFO', `User ${decodedToken.name} successfully logged in`)

            //FIXME: use state manager to set axios default headers
            axios.defaults.headers.common['Authorization'] = `Bearer ${tokenString}`;

            // Navigate to home
            navigate('/')

        } catch (error) {
            alert(error.message)

        }
    }


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
                        onFinish={onLoginFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
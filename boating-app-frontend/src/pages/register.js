import { Button, DatePicker, Form, Input } from 'antd';
import registerUser from '../logic/registerUser'
// import UserContext from "../UserContext";

function Register() {
    // const { setUser } = useContext(UserContext)
    // const navigate = useNavigate()
    const [form] = Form.useForm();
    let birthDateString = '';

    const onBirthDateUpdate = (date, dateString) => {
        birthDateString = dateString
    }

    const onRegisterFinish = async (values) => {

        const registrationData = {
            name: values.name,
            surname: values.surname,
            birthDate: birthDateString,
            idNumber: values.idNumber,
            email: values.email,
            contactNumber: values.phone,
            address: {
                street: values.street,
                postalCode: values.postalCode,
                city: values.city,
                country: values.country
            },
            password: values.password,
        }

        try {

            await registerUser(registrationData)
            // setUser(registeredUser)

            // navigate('/')
        } catch (error) {
            alert(error.message)

        }
    }
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 22,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };



    return (
        <main className="h-screen w-screen flex flex-row items-center justify-center">
            <div className="w-5/12 h-screen flex flex-col justify-center items-center bg-gray-800">
                <div className="register-form bg-bone flex p-4">
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onRegisterFinish}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="name"
                            label="First name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input

                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="surname"
                            label="surname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your last name!',
                                },
                            ]}
                        >
                            <Input

                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item label="Date of birth">
                            <DatePicker onChange={onBirthDateUpdate} />
                        </Form.Item>

                        <Form.Item
                            name="idNumber"
                            label="Identification Number"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your idNumber!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input

                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="street"
                            label="Adress"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your adress!',
                                },
                            ]}
                        >
                            <Input

                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="postalCode"
                            label="Postal Code"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your postal code!',
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="city"
                            label="City"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your city!',
                                },
                            ]}
                        >
                            <Input

                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="country"
                            label="Country"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your country!',
                                },
                            ]}
                        >
                            <Input

                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className="login-background-image w-7/12 h-screen bg-cover bg-center" style={{ backgroundImage: "url(/login/background.jpg)" }}></div>
        </main >

    )
}


export default Register
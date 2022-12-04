import { Button, DatePicker, Form, Input } from 'antd';
import registerUser from '../logic/registerUser'
// import UserContext from "../UserContext";

function Register() {
    // const { setUser } = useContext(UserContext)
    // const navigate = useNavigate()

    const handleRegister = async event => {

        event.preventDefault()

        const form = event.target

        console.log(form)

        const nameInput = form.name
        const surnameInput = form.surname
        const birthDateInput = form.birthDate
        const idNumberInput = form.idNumber
        const emailInput = form.email
        const contactNumberInput = form.contactNumber
        const addressInput = form.address
        const passwordInput = form.password

        const name = nameInput.value
        const surname = surnameInput.value
        const birthDate = birthDateInput.value
        const idNumber = idNumberInput.value
        const email = emailInput.value
        const contactNumber = contactNumberInput.value
        const address = addressInput.value
        const password = passwordInput.value

        try {
            registerUser(name, surname, birthDate, idNumber, email, contactNumber, address, password)
            // setUser(registeredUser)

            // navigate('/')
        } catch (error) {
            alert(error.message)

            passwordInput.value = ''
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
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <main className="h-screen w-screen flex flex-row items-center justify-center">
            <div className="w-5/12 h-screen flex flex-col justify-center items-center bg-gray-800">
                <div className="register-form bg-bone flex p-4">
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
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
                            <DatePicker />
                        </Form.Item>

                        <Form.Item
                            name="idnumber"
                            label="idNumber"

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
                            name="adress"
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
                            name="Postal Code"
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
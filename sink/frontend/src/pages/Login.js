import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'


import BoxWithDropShadow from '../components/boxWithDropshadow'
import TextBox from '../components/textBox'
import ButtonBlack from '../components/buttons/buttonBlack'



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div style={styles.page}>
            <h1 style={styles.title}>sink</h1>
            <BoxWithDropShadow>
                <form className="login" onSubmit={handleSubmit} style={styles.insideBox}>
                    <h2>Sign In</h2>
                    <div style={styles.textBox}>
                        <TextBox
                            id='email'
                            type="email"
                            name='Username:'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            thisHeight={'35px'}   
                        />
                    </div>
                    <div style={styles.textBox}>
                        <TextBox
                            id='password'
                            type="password"
                            name="Password:"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            thisHeight={'35px'}
                        />
                    </div>
                    <button className='light' style={styles.button} disabled={isLoading}>Login</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </BoxWithDropShadow>
        </div>
    )
}

export default Login

const styles= {
    page:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    insideBox:{ 
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'500px',
    },
    title:{
        margin:'30px',
        fontSize:'60px',
    },
    textBox:{
        width:'100%',
        marginBottom:'15px',
    },
    button:{
        color:'white',
        backgroundColor:'black',
        margin:'10px',
        padding: '0.5rem 2rem',
        borderRadius: '4px',
        boxShadow: '0px 2px 3px lightgrey',
        textTransform: 'lowercase',
    },
}
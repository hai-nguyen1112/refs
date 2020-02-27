import React, {useState, createRef} from 'react';
import './App.css';

const MyInputs = React.forwardRef((props, ref) => {
    console.log(ref.current)
    return (
        <>
            <input name="input1" ref={ref}/>
            <input name="input2"/>
        </>
    )
})

const App = () => {
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    let emailInputRef = null
    let addressInputRef = null
    const input1Ref = createRef()

    const setEmailInputRef = element => {
        emailInputRef = element
    }

    const setAddressInputRef = element => {
        addressInputRef = element
    }

    const focusEmailInput = () => {
        if (emailInputRef) emailInputRef.focus()
    }

    const focusAddressInput = () => {
        if (addressInputRef) addressInputRef.focus()
    }

    const incrementEmail = () => {
        emailInputRef.value++
    }

    const focusInput1 = () => {
        if (input1Ref) input1Ref.current.focus()
    }

    console.log(email)

    return (
        <div className="App">
            <input
                name="email"
                onChange={e => setEmail(e.target.value)}
                ref={setEmailInputRef}
                type="text"
                value={email}
            />
            <input
                name="address"
                onChange={e => setAddress(e.target.value)}
                ref={setAddressInputRef}
                type="text"
                value={address}
            />
            <button onClick={() => focusEmailInput()}>Focus Email Input</button>
            <button onClick={() => incrementEmail()}>Increment Email</button>
            <button onClick={() => focusAddressInput()}>Focus Address Input</button>
            <MyInputs ref={input1Ref}/>
            <button onClick={() => focusInput1()}>Focus Input 1</button>
        </div>
    )
}

export default App

// const [email, setEmail] = useState("")
// const emailInputRef = createRef()
//
// const onEmailChange = e => setEmail(e.target.value)
//
// console.log(emailInputRef)
// console.log(emailInputRef.current)
//
// return (
//     <div className="App">
//         <input
//             name="email"
//             onChange={onEmailChange}
//             ref={emailInputRef}
//             type="text"
//             value={email}
//         />
//         <button onClick={() => emailInputRef.current.focus()}>Focus Email Input</button>
//     </div>
// );
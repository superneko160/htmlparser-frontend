import { useState } from 'react'
import Form from './components/Form'
import FormResult from './components/FormResult'

function App() {
    const [result, setResult] = useState('')

    const handleSubmit = (value: string) => {
        // ここで値の処理を行う
        // 現在は入力された文字をそのまま出力するだけ
        setResult(value.toUpperCase())
    }

    return (
        <div className='max-w-5xl mx-auto p-8 text-center'>
            <Form onSubmit={handleSubmit} />
            <FormResult value={result} />
        </div>
    )
}

export default App

import { useState } from 'react'
import type { FormData } from './types'
import Form from './components/Form'
import FormResult from './components/FormResult'

function App() {
    const [formData, setFormData] = useState<FormData>({
        url: '',
        elements: '',
        attrs: [],
        api: '',
    })

    const handleSubmit = (formData: FormData) => {
        setFormData(() => formData)
    }

    return (
        <div className='max-w-5xl mx-auto p-8 text-center'>
            <Form onSubmit={handleSubmit} />
            {formData.url !== '' && <FormResult formData={formData} />}
        </div>
    )
}

export default App

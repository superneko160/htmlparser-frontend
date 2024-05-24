import { useState } from 'react'
import type { FormData } from './types'
import Form from './components/Form'
import FormResult from './components/FormResult'

function App() {
    const [formData, setFormData] = useState<FormData>({
        url: '',
        elements: '',
        attrs: [],
    })

    const handleSubmit = (formData: FormData) => {
        setFormData(formData)
    }

    return (
        <div className='max-w-5xl mx-auto p-8 text-center'>
            <Form onSubmit={handleSubmit} />
            {Object.keys(formData).length > 0 && <FormResult formData={formData} />}
        </div>
    )
}

export default App

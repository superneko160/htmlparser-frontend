import { useState } from 'react'
import type { IndexFormData } from './types'
import Form from './components/Form'
import FormResult from './components/FormResult'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
    const [formData, setFormData] = useState<IndexFormData>({
        url: '',
        elements: '',
        attrs: [],
        api: '',
    })

    const handleSubmit = (formData: IndexFormData) => {
        setFormData(() => formData)
    }

    return (
        <div className='max-w-5xl mx-auto p-8 text-center'>
            <Form onSubmit={handleSubmit} />
            {formData.url !== '' && <FormResult formData={formData} />}
            <ScrollToTopButton />
        </div>
    )
}

export default App

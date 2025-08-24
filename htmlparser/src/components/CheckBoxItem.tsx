type CheckboxItemProps = {
    id: string
    label: string
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function CheckboxItem({ id, label, checked, onChange }: CheckboxItemProps) {
    return (
        <div className='flex items-center'>
            <input
                type='checkbox'
                name='attrs[]'
                id={id}
                value={id}
                onChange={onChange}
                checked={checked}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
            />
            <label htmlFor={id} className='text-medium ml-2'>
                {label}
            </label>
        </div>
    )
}

export default CheckboxItem

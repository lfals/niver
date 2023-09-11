export const tagOptions = [
    { value: 'friend', label: 'Amigo' },
    { value: 'family', label: 'Família' },
    { value: 'work', label: 'Trabalho' },
    { value: 'love', label: 'Amor' },
    { value: 'affair', label: 'Namoro' },
    { value: 'marriage', label: 'Casamento' },
    { value: 'pet', label: 'Pet' },
    { value: 'other', label: 'Outro' },
]

export function TagsOptions() {
    return (
        <>
            {tagOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </>
    )
}
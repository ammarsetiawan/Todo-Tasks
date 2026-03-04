import { useState } from 'react'

function TodoItem({text, id, onDelete}){
    const [completed, setCompleted] = useState(false)
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            padding: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '10px',
            marginBottom: '12px',
            transition: 'all 0.3s ease',
            transform: completed ? 'scale(0.98)' : 'scale(1)',
            opacity: completed ? 0.7 : 1
        }}>
            <input 
                type="checkbox"
                checked={completed} 
                onChange={(e) => setCompleted(e.target.checked)}
                style={{
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer',
                    accentColor: '#667eea'
                }}
            />
            <span style={{
                textDecoration: completed ? 'line-through' : 'none',
                color: completed ? '#999' : '#333',
                fontSize: '1.05em',
                fontWeight: completed ? '400' : '500',
                flex: 1,
                transition: 'all 0.3s ease'
            }}>
                {text}
            </span>
            {completed && <span style={{ fontSize: '1.5em' }}>✓</span>}
            {completed && (
                <button
                    onClick={() => onDelete(id)}
                    className='delete-btn'
                    title="Delete task"
                >
                    🗑️
                </button>
            )}
        </div>
    )
}
export default TodoItem;
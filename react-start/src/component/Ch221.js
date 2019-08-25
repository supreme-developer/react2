import { useState, useCallback } from 'react';

// custom hook 만들떄는 꼭 컴포넌트앞에 use라고 넣어줘야한다.
function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => ({
            ...form, 
            [name] : value
        }));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
};

export default useInputs;
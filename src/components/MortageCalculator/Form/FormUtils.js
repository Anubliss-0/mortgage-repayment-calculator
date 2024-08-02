export function setFocusOnFirstEmpty(fieldRefs) {
    const emptyRef = fieldRefs.find(ref => {
        if (ref.current) {
            if (ref.current.type === 'radio') {
                return !ref.current.checked;
            } else {
                return ref.current.value === '';
            }
        }
        return false;
    });
    if (emptyRef && emptyRef.current) {
        emptyRef.current.focus();
    }
}
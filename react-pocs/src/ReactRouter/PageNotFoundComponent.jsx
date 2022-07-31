import react from 'react';
import { useLocation } from 'react-router-dom';
export default function PageNotFoundComponent() {
    let location = useLocation();
    return (
        <h3 style={{ color: "red" }} >  No match for <code>{location.pathname}</code></h3>
    )
}
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

function Button (props: ButtonProps) {
    return <button className="bg-blue-500 hover:bg-green-700 font-bold py-2 px-4 rounded" {...props}>{props.children}</button>;
}
export default Button;
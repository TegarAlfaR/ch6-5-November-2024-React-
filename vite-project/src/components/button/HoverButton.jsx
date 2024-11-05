function HoverButton({children, onSelect}) {
    // document.querySelector('button').addEventListener('click', () => {
    //     console.log("hi !!!!")
    // });


    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}

export default HoverButton
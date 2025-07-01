export default function ShowCard({ img, number }) {
    return (
        <div className='showcard'>
            <span className="showcard-num">{number}</span>
            <img className="show-img" src={img} />
        </div>
    )
}
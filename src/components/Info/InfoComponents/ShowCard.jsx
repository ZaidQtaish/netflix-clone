export default function ShowCard({ img, number }) {
    return (
        <div className='showcard'>
            
            <img className="show-img" src={img} />
            <span className="showcard-num">{number}</span>
        </div>
    )
}
import { FaCheck } from "react-icons/fa6";

function videoSection() {
  return (
    <div className="d-flex mt-5  p-5" >
      <div className="d-flex flex-column justify-content-center mb-3 w-75 p-5 ">
        <h2 className=" fw-semibold pb-3">Qualified electricians in New York.</h2>
        <p className="text-secondary">Velis demo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, seditum netis velas matrix net nesciunt.</p>
        <p className="text-secondary" > <FaCheck color="#1089D4" size='27px' style={{ paddingRight: "10px" }} />Quias netus magni netsum eos qui ratione sequi.</p>
        <p className="text-secondary" > <FaCheck color="#1089D4" size='27px' style={{ paddingRight: "10px" }} />Venis ratione sequi netus enim quia tempor magni.</p>
        <p className="text-secondary" > <FaCheck color="#1089D4" size='27px' style={{ paddingRight: "10px" }} />Enim ipsam netus voluptatem quia voluptas.</p>
        <button className="btn btn-primary shadow w-25 fs-6" style={{ height: '50px' }}>Get Started</button>
      </div>
      <div className="m-auto mx-auto pb-3">
        <img className="rounded w-75" src="https://picsum.photos/1000/700" alt="" />
      </div>
    </div >
  )
}

export default videoSection
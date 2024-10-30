import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([
    {
      id: "1",
      description: "some description",
      amount: "1245.00",
      date: "2024-10-02"
    },
    {
      id: "2",
      description: "some description",
      amount: "1245.00",
      date: "2024-10-15"
    },
    {
      id: "3",
      description: "some description",
      amount: "1245.00",
      date: "2024-10-27"
    },
    {
      id: "4",
      description: "some description",
      amount: "1245.00",
      date: "2024-10-23"
    },
    {
      id: "5",
      description: "some description",
      amount: "1245.00",
      date: "2024-10-07"
    },
  ])

  const [end, setEnd] = useState("2024-10-31")
  const [start, setStart] = useState("2024-10-01")
  const [page, setPage] = useState(0)

  const mock = [
    {
      id: "1",
      description: "some description",
      amount: "1245.00",
      date: "2024-10-02"
    },
    {
      id: "2",
      description: "some description",
      amount: "1245.00",
      date: "2024-10-15"
    },
    {
      id: "3",
      description: "some description",
      amount: "1245.00",
      date: "2024-10-27"
    },
    {
      id: "4",
      description: "some description",
      amount: "1245.00",
      date: "2024-10-23"
    },
    {
      id: "5",
      description: "some description",
      amount: "1245.00",
      date: "2024-10-07"
    },
  ]

  useEffect(() => {
    setData(mock.filter(el => el.date > start && el.date < end))
  }, [start, end])

  return (
    <div>

      <div className="dates">
        <div>
          Start Date <br />
          <input type="date" value={start} onChange={(e) => setStart(e.currentTarget.value)} />
        </div>

        <br />

        <div>
          End  Date<br />
          <input type="date" value={end} onChange={(e) => setEnd(e.currentTarget.value)} />
        </div>
      </div>

      <br />
      <br />

      <div>Total Results: {data.length}</div>

      <br />
      <br />

      {data.length ?
        data.map((el, i) => {
          return (
            <div key={i}>
              <div><strong>Amount:</strong> {el.amount}</div>
              <div><strong>Description:</strong> {el.description}</div>
              <div><strong>Date:</strong> {el.date}</div>
              <br />
            </div>
          )
        }).slice(page * 3, page * 3 + 3)
        : <div>No results</div>
      }

      <select name="" id="" onChange={e=> setPage(e.currentTarget.value)}>      
        <option value="0">1</option>
        <option value="1">2</option>
      </select>
    </div>
  )
}

export default App

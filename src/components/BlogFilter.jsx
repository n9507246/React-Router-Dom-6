import { useState } from "react"

export default function BlogFilter({postQuery, latest, setSearchParams}){

    const [searchData, setSearch] = useState(postQuery)
    const [checked, setChecked] = useState(latest)
    

    const search = (e) => {
        e.preventDefault()
        const form = e.target
        const query = form.search.value
        const isLatest = form.latest.checked
        const params = {}
        if(query.length) params.post = query
        if(isLatest) params.latest = true
        
        setSearchParams(params)
    }
  
    return(
        <form autoComplete="off" onSubmit={search}>
          <input value={searchData} onChange={(e)=>{setSearch(e.target.value)}} type='search' name='search'/>
          <label>
              <label style={{padding: '0 1rem'}}>
                Latest
                <input type='checkbox' name="latest" checked={checked} onChange={(e)=>{setChecked(e.target.checked)}}/>
              </label>
          </label>
          <input type='submit' name='Search' />

        </form>
    )    
}
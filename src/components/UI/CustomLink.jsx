import { NavLink, useMatch } from 'react-router-dom'

function CustomLink({children, to, ...props}) {

    const match = useMatch(to)

    return (
      <NavLink to={to} {...props} 
        className={()=> match ? props.className + ' ' + 'active-link' : props.className}

      >
        
        {children}
      </NavLink>
    )
  }
  
  export default CustomLink
  
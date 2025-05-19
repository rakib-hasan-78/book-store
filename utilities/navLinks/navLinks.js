const navLinks =({isActive})=>{
    return `p-1.5 ${isActive ? 'border border-project-green text-project-green rounded-sm font-bold':'text-gray-600 border-0'}`
}

export default navLinks;
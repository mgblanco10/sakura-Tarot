import { beforeEach, expect } from "vitest"
import {render, screen} from '@testing-library/react'
import InformationHome from "./InformationHome"

describe('Component TitleInfoHome', ()=>{

    beforeEach(()=>{
        render(<InformationHome />)
    })

    test('should print the <h1> title of the home page', ()=>{
        expect(screen.getByText('¡Bienvenid@!')).toBeDefined()
    })

    test('should print the <h2> subtitle of the home page', ()=>{
        expect(screen.getByText('Tirada de TAROT')).toBeDefined()
    })  
    test('should print the <h3> subtitle of the home page', ()=>{
        expect(screen.getByText('¡Realiza tu tirada!')).toBeDefined()
    })     

})
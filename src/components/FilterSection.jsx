import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext'
import {FaCheck}from 'react-icons/fa'
import FormatPrice from '../Helpers/FormatPrice'
import {Button} from '../styles/Button'
const FilterSection = () => {
  const {filters:{text,colors,price,maxPrice,minPrice},updateFilterValue,all_products,clearFilters}=useFilterContext();
  const getUniqueData=(data,property)=>{
    let newVal=data.map((ele)=>
    {
      return ele[property]
    }
    )
    return newVal=['All',...new Set(newVal)];
    // console.log(newVal)

  }

  const categoryData=getUniqueData(all_products,"category");
 const companyData=getUniqueData(all_products,"company")
 let colorsData=getUniqueData(all_products,"colors")
 
 colorsData=[...new Set(colorsData.flat(Infinity))]
 

 return (
    <Wrapper>
      <div className='filter-search'>
        <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" name='text' placeholder='search' value={text} onChange={updateFilterValue} />
        </form>
      </div>
      <div className='filter-category'>
        <h3>category</h3>
        <div>
        {
        categoryData.map((ele,i)=><button key={i} type="button" name='category' value={ele} onClick={updateFilterValue}>{ele}</button>)
      }
      </div>
      </div>
      
      <div className='filter-company'>
        <h3>company</h3>
        <select name='company' id='company' className='filter-company--select' onChange={updateFilterValue}>
        {
        companyData.map((ele,i)=><option key={i} name="company" value={ele} >{ele}</option>)
      }
      </select>
      </div>
      <div className='filter-colors colors'>
        <h3>colors</h3>
        
        <div className="filter-color-style">
          {
            colorsData.map((ele ,i)=> ele==='All' ?<button type='button' className='color-all--style'
             name="colors" value={ele}
            key={i} onClick={updateFilterValue}>{ele}</button>: <button type='button'
             className={colors===ele ?"btnStyle active":"btnStyle"}style={{backgroundColor:ele}} name="colors" value={ele}
             key={i} onClick={updateFilterValue}>{colors===ele?<FaCheck className='checkStyle'/>:null}</button>)
          }
        </div>
      </div>

      <div className="filter_price">
        <h3>price</h3>
        <p><FormatPrice price={price}/></p>
        <input type="range" min={minPrice} max={maxPrice} name="price" value={price} onChange={updateFilterValue} />
        </div>
        <div className="filter-clear"><Button className='btn' onClick={clearFilters}>Clear Filter</Button></div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection
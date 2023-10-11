import React, { useState } from 'react';


// const[expand, setExpand] = useState(false)

// const handleExpand= () =>
// {
 
//   setExpand(!expand)
// }
// onClick = {handleExpand}
// {expand && <> yeha per likhna hai jo dropdown ke ander ayega </>}





// Sure! Let's go through each line of the code step by step:

// 1. `const [expand, setExpand] = useState(false)`: This line uses the `useState` 
// hook to create a state variable `expand` and its corresponding updater function 
// `setExpand`. The initial value of `expand` is set to `false`.

// 2. `const handleExpand = () => { setExpand(!expand) }`: This line defines a
//  function called `handleExpand`. When this function is called, it will use `setExpand`
// to toggle the value of `expand`. If `expand` is currently `false`, it will become `true`
// , and vice versa.

// 3. `onClick={handleExpand}`: This line adds the `onClick` event handler to an HTML 
// element (such as a button or a div). When this element is clicked, it will call the 
// `handleExpand` function, which will toggle the value of `expand`.

// 4. `{expand && <> yeha per likhna hai jo dropdown ke ander ayega </>}`: This is a 
// conditional rendering statement using the JavaScript's `&&` operator. When `expand` is 
// `true`, the content inside the curly braces will be rendered. Otherwise, if `expand` is 
// `false`, nothing will be rendered.

// In this case, when the element with the `onClick` event is clicked, it will call the
//  `handleExpand` function, which toggles the value of `expand`. If `expand` becomes
//  `true`
//  , the content inside the curly braces will be displayed, simulating 
// the expansion of a dropdown or a toggleable component. If `expand` is `false`,
// the content inside the curly braces will not be displayed.













const CollapseSections = () => {
  const [sectionsOpen, setSectionsOpen] = useState({
    section1: false,
    section2: false,
    section3: false,
  });


  const toggleSection = (sectionName) => {
    setSectionsOpen({
      ...sectionsOpen,
      [sectionName]: !sectionsOpen[sectionName],
    });
  };

  return (
    <div>
        
      <button onClick={() => toggleSection('section1')}>
        {/* {sectionsOpen['section1'] ? 'Dashboard' : 'Dashboard'} */}
        Dashboard
      </button>
      {sectionsOpen['section1'] && <div>Content of Section 1</div>}

      <button onClick={() => toggleSection('section2')}>
        {sectionsOpen['section2'] ? 'Collapse Section 2' : 'Open Section 2'}
      </button>
      {sectionsOpen['section2'] && <div>Content of Section 2</div>}

      <button onClick={() => toggleSection('section3')}>
        {sectionsOpen['section3'] ? 'Collapse Section 3' : 'Open Section 3'}
      </button>
      {sectionsOpen['section3'] && <div>Content of Section 3</div>}
    </div>
  );
};

export default CollapseSections;





// Sure! Let's go through each line of the code step by step:

// 1. `const CollapseSections = () => {`: This declares a functional 
// component called `CollapseSections`.

// 2. `const [sectionsOpen, setSectionsOpen] = useState({ section1: false,
//  section2: false, section3: false });`:
//  This line initializes a state variable `sectionsOpen`
//  using the `useState` hook. It's an object with three properties (`section1`, `section2`, and `section3`),
//  and all are initially set to `false`. These properties will determine whether the corresponding sections
//  are open or collapsed.

// 3. `const toggleSection = (sectionName) => { ... };`: This function, `toggleSection`, is defined to 
// toggle the state of the specified section. It takes the `sectionName` as an argument and updates the 
// state using the `setSectionsOpen` function. It uses the spread operator (`...`) to create a copy of the
//  `sectionsOpen` object and then toggles the value of the specified section using the `sectionName`.

// 4. `<div> ... </div>`: This is the JSX code for the component's markup.

// 5. `<button onClick={() => toggleSection('section1')}> ... </button>`: This is a button element with an
//  `onClick` event handler that calls the `toggleSection` function with `'section1'` as the argument when
//  clicked. It will toggle the state of `section1`.

// 6. `{sectionsOpen['section1'] ? 'Collapse Section 1' : 'Open Section 1'}`: This is a ternary operator 
// that checks the value of `sectionsOpen['section1']`. If it's `true`, the text 'Collapse Section 1' will
//  be displayed; otherwise, 'Open Section 1' will be displayed. This text will change based on whether `section1`
//  is open or collapsed.

// 7. `{sectionsOpen['section1'] && <div>Content of Section 1</div>}`: This is another ternary operator.
//  If `sectionsOpen['section1']` is `true`, it will render the `<div>Content of Section 1</div>`.
//  Otherwise, it won't render anything for `section1`.
// 8. The same pattern is repeated for `section2` and `section3`.

// The `CollapseSections` component contains buttons that can be clicked to toggle the display of the
//  content for each section. When a button is clicked, the corresponding section's content will be 
// displayed if it's currently collapsed, and it will be hidden if it's currently open. 
// This creates a collapsible behavior for each section independently.
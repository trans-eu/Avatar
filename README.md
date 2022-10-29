# Avatar component
User Avatar component with status indicator, written in React.

What's cool about it?
* The image is lazy loaded
* The status indicator has a transparent border

## Usage and props

```jsx
import { Avatar } from '@trans-eu/avatar'

const handleError = err => { console.log(err) }
const handleLoad = e => { console.log(e) }
return <Avatar 
    lastName="Doe" // required
    name="John" // required
    onError={handleError}
    onLoad={handleLoad}
    responsive={true} //default false
    size="huge" // default medium
    src="https://example.org/image" //if not provided initials will be displayed
    status="available" // default null
    title="avatar title"
    >
    </Avatar>

```

## Local storybook example

```
git clone https://github.com/trans-eu/Avatar.git
cd ./avatar
npm install
npm run storybook
```

and open `http://localhost:6006/` in your browser

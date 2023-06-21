# simple-dawn-modal

A library of React components created using `create-react-app`.

## Installation

Run the following command:

```
npm install simple-dawn-modal
```

## How to use

First you'll need to import the Modal and its open function with the line:

```js
import { Modal, handleOpen } from 'simple-dawn-modal'
```

(You can also use the `handleClose` function if you want to make the close button yourself)

Then you can simply use them as this way:

```html
<button onClick={handleOpen}>Show me my Modal</button>
<Modal content="Exemple of what you could write in there." />
```

You can use these parameters to modify the bearing of the Modal:
| Parameters | Description | Format | Default Value | Required |
| --------------- | ---------------------------------------------------- | ------- | ------------- | -------- |
| content | The content of the Modal | string | none | true |
| open | If the modal is already open when the page is loaded | boolean | false | false |
| disableCloseBtn | Remove the close button | boolean | false | false |
| disableCloseBkg | Click outside the Modal won't close it anymore | boolean | false | false |

## Exemples
[Simple Modal](https://codesandbox.io/p/sandbox/simple-dawn-modal-yqxn75)
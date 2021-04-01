import { useState } from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-react'

const RichTextEditor = () => {

  const [text, setText] = useState('')

  return (
    <div className='editor'>
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(e, editor) => {
          const data = editor.getData()
          setText(data)
        }}
      />
    </div>
  )
}

export default RichTextEditor;
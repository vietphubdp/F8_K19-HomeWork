import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Box, Typography } from '@mui/material';

export default function RichTextEditor({ label, value, onChange, placeholder = '' }) {
  return (
    <Box sx={{ mb: 2 }}>
      {label && (
        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#212529', mb: 1 }}>
          {label}
        </Typography>
      )}
      <Box
        sx={{
          '& .ck-editor__editable_inline': {
            minHeight: 180,
            borderRadius: '0 0 8px 8px !important',
            fontSize: '0.95rem',
            fontFamily: 'inherit',
          },
          '& .ck-toolbar': {
            borderRadius: '8px 8px 0 0 !important',
            borderColor: '#c4c4c4 !important',
          },
          '& .ck-focused': {
            borderColor: '#00b14f !important',
            boxShadow: '0 0 0 2px rgba(0, 177, 79, 0.2) !important',
          },
        }}
      >
        <CKEditor
          editor={ClassicEditor}
          data={value || ''}
          config={{
            placeholder: placeholder || 'Nhập nội dung chi tiết...',
            toolbar: [
              'heading',
              '|',
              'bold',
              'italic',
              'link',
              'bulletedList',
              'numberedList',
              '|',
              'outdent',
              'indent',
              '|',
              'blockQuote',
              'insertTable',
              'undo',
              'redo',
            ],
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            if (onChange) onChange(data);
          }}
        />
      </Box>
    </Box>
  );
}

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const Code = ({ language, value }) => (
  <SyntaxHighlighter
    language={(language === 'ts' ? 'typescript' : language) || 'typescript'}
    style={darcula}
  >
    {value}
  </SyntaxHighlighter>
)

export default Code;
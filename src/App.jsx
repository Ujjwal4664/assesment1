// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import classes from './Project.module.css';
import { Flex,Text,TextInput,Button} from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { MantineProvider } from '@mantine/core';


export default function App() {
  const options = ["Experience", "Quality", "Design", "Size", "Features", "Value", "Replacement"];
   const [selectedOption, setSelectedOption] = useSetState(Array(options.length).fill(0));
   
  

   const handleOptionClick = (index) => {
    setSelectedOption(Array(options.length).fill(0));
    const updatedOptions = [selectedOption];
    updatedOptions[index] = 1;
    setSelectedOption(updatedOptions);
  };
  const comments = [
    {
      name:"Jesse Hopkins",
      content:"A second common modern English style is to use no indenting, but add vertical white space to create block paragraphs. On a typewriter a double carriage return produces a blank line for this purpose professional typesetters ",
      date:"Feb 13 2021",
      ratings:5,
    },
    {
      name:"Alice banks",
      content:"A second common modern English style is to use no indenting, but add vertical white space to create block paragraphs. On a typewriter a double carriage return produces a blank line for this purpose professional typesetters ",
      date:"Feb 14 2021",
      ratings:4,
    }
  ]
  return <MantineProvider>{
    <>
    <Flex className={classes.app}>
        <Flex className={classes.main}>
           <Text fz="lg" fw={700} c="white">Reviews</Text>
            <TextInput
              className={classes.input}
              placeholder="Your name"
              withAsterisk
            />
            <Flex className={classes.buttonlist}>
              {options.map((Option, index) => (
                <Button key={index}
                  className={`${
                    selectedOption[index]==1 ? classes.active : classes.button
                  }`}
                onClick={() => handleOptionClick(index)}
                >
              {Option}
              </Button>
              ))}              
            </Flex>
            <Flex className={classes.comments}>
              {comments.map((comm,index)=>(
                <Flex className={classes.comment} key={index}>
                   <Flex className={classes.header}>
                    <Flex align="center">
                    <Flex className={classes.avatar}><Text>{comm.name[0]}</Text></Flex>
                    <Text fz="xs" fw={700} c="white">{comm.name}</Text>
                    </Flex>
                    <Flex className={classes.ratings}>
                      {Array.from({ length: comm.ratings }, (_, i) => (
                  <Text fz="xs" key={i}>❤</Text>
                ))}
                    </Flex>
                  </Flex>
                  <Flex className={classes.content}>
                    <Text>{comm.content}</Text>
                    <Flex className={classes.header}><Text>{comm.date}</Text><Button className={classes.button}>Share</Button></Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
        </Flex>
    </Flex>

    </>
  }</MantineProvider>;
}
import React, {useEffect} from 'react';

function Lesson(props) {
  return (
    <div>
      {props.title} - {props.subTitle}
    </div>
  );
}

const lessons = [
  {
    title: 'react',
    subTitle: 'Context Test'
  },
  {
    title: 'react',
    subTitle: 'Hoc Test'
  },
  {
    title: 'react',
    subTitle: 'Composition Test'
  }
]

const withContent = Comp => props => {
  let lesson = lessons[props.idx];
  return (
    <Comp {...lesson}/>
  )
}

const withLog = Comp => props => {
  useEffect(() => {
    console.log('did mount', props)
  }, [])
  return (
    <Comp {...props}/>
  )
}

const LessonWithContent = withLog(withContent(Lesson))

function HocTest(props) {
  return (
    <div>
      <h1>Hoc Test</h1>
      {[0,0,0].map((item,idx) => (
        <LessonWithContent key={idx} idx={idx}/>
      ))}
    </div>
  );
}

export default HocTest;
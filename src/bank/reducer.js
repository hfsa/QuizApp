import { combineReducers } from "redux";

let questions = [
  {
    id: 1001,
    name: "Who won the ICC ODI World Cup in 2011?",
    questionTypeId: 1,
    options: [
      {
        name: "Australia",
        isAnswer: false
      },
      {
        name: "West Indies",
        isAnswer: false
      },
      {
        name: "India",
        isAnswer: true
      },
      {
        name: "England",
        isAnswer: false
      }
    ],
    attended: false,
    answer: false,
    selectedAnswer: undefined,
    actualAnswer: "India"
  },
  {
    id: 1002,
    name: "Which is the first high level programming language?",
    questionTypeId: 2,
    options: [
      {
        name: "C",
        isAnswer: false
      },
      {
        name: "COBOL",
        isAnswer: false
      },
      {
        name: "FORTRAN",
        isAnswer: true
      },
      {
        name: "C++",
        isAnswer: false
      }
    ],
    attended: false,
    answer: false,
    selectedAnswer: undefined,
    actualAnswer: "FORTRAN"
  },
  {
    id: 1003,
    name: "Which one is the first search engine?",
    questionTypeId: 3,
    options: [
      {
        name: "Google",
        isAnswer: false
      },
      {
        name: "Archie",
        isAnswer: true
      },
      {
        name: "Altavista",
        isAnswer: false
      },
      {
        name: "WAIS",
        isAnswer: false
      }
    ],
    attended: false,
    answer: false,
    selectedAnswer: undefined,
    actualAnswer: "Archie"
  },
  {
    id: 1004,
    name: "Firewall in computer is used for?",
    questionTypeId: 4,
    options: [
      {
        name: "Security",
        isAnswer: true
      },
      {
        name: "Data Transmission",
        isAnswer: false
      },
      {
        name: "Authentication",
        isAnswer: false
      },
      {
        name: "Monitoring",
        isAnswer: false
      }
    ],
    attended: false,
    answer: false,
    selectedAnswer: undefined,
    actualAnswer: "Security"
  },
  {
    id: 1005,
    name: "1024 Bit is equal to how many Byte?",
    questionTypeId: 5,
    options: [
      {
        name: "1 Byte",
        isAnswer: false
      },
      {
        name: "128 Byte",
        isAnswer: true
      },
      {
        name: "32 Byte",
        isAnswer: false
      },
      {
        name: "64 Byte",
        isAnswer: false
      }
    ],
    attended: false,
    answer: false,
    selectedAnswer: undefined,
    actualAnswer: "128 Byte"
  },
  {
    id: 1006,
    name: "Computer hard disk was first introduced in 1956 by?",
    questionTypeId: 6,
    options: [
      {
        name: "Dell",
        isAnswer: false
      },
      {
        name: "Apple",
        isAnswer: false
      },
      {
        name: "Microsoft",
        isAnswer: false
      },
      {
        name: "IBM",
        isAnswer: true
      }
    ],
    attended: false,
    answer: false,
    selectedAnswer: undefined,
    actualAnswer: "IBM"
  },
  {
    id: 1007,
    name: "IC chips of computer are usually made up of?",
    questionTypeId: 7,
    options: [
      {
        name: "Silver",
        isAnswer: false
      },
      {
        name: "Aluminium",
        isAnswer: false
      },
      {
        name: "Copper",
        isAnswer: false
      },
      {
        name: "Silicon",
        isAnswer: true
      }
    ],
    attended: false,
    answer: false,
    selectedAnswer: undefined,
    actualAnswer: "Silicon"
  },
  {
    id: 1008,
    name: "A folder in Windows can't be named with?",
    questionTypeId: 8,
    options: [
      {
        name: "can",
        isAnswer: false
      },
      {
        name: "con",
        isAnswer: true
      },
      {
        name: "mak",
        isAnswer: false
      },
      {
        name: "make",
        isAnswer: false
      }
    ],
    attended: false,
    answer: false,
    selectedAnswer: undefined,
    actualAnswer: "con"
  },
  {
    id: 1009,
    name: "Which of the following is different from other members?",
    questionTypeId: 9,
    options: [
      {
        name: "Windows",
        isAnswer: false
      },
      {
        name: "Google",
        isAnswer: true
      },
      {
        name: "Linux",
        isAnswer: false
      },
      {
        name: "MAC",
        isAnswer: true
      }
    ],
    attended: false,
    answer: false,
    selectedAnswer: undefined,
    actualAnswer: "MAC"
  },
  {
    id: 1010,
    name: "Which supercomputer is developed by the Indian Scientists?",
    questionTypeId: 10,
    options: [
      {
        name: "Super 301",
        isAnswer: false
      },
      {
        name: "Compaq Presario",
        isAnswer: false
      },
      {
        name: "CRAY YMP",
        isAnswer: false
      },
      {
        name: "Param",
        isAnswer: true
      }
    ],
    attended: false,
    answer: false,
    selectedAnswer: undefined,
    actualAnswer: "Param"
  }
];

let questNo = {
  number: 0
};

const quesNoReducer = (state = questNo, action) => {
  if (action.type === "FIRST") {
    return {
      ...state,
      number: 0
    };
  }
  if (action.type === "NEXT") {
    return {
      ...state,
      number: state.number === 9 ? 9 : state.number + 1
    };
  }
  if (action.type === "PREV") {
    return {
      ...state,
      number: state.number === 0 ? 0 : state.number - 1
    };
  }
  if (action.type === "LAST") {
    return {
      ...state,
      number: 9
    };
  }
  return state;
};

const quesReducer = (state = questions, action) => {
  if (action.type === "CHANGE") {
    var arr = state.filter(ele => ele.questionTypeId === parseInt(action.id));

    function checkAns(ele) {
      if (ele.isAnswer === true) {
        return ele.name;
      }
    }

    var ans = arr[0].options.filter(checkAns);

    if (ans[0].name === action.value) {
      arr[0].attended = true;
      arr[0].answer = true;
      arr[0].selectedAnswer = action.value;
    } else {
      arr[0].attended = true;
      arr[0].answer = false;
      arr[0].selectedAnswer = action.value;
    }

    state.splice(parseInt(action.id) - 1, 1);
    state.splice(parseInt(action.id) - 1, 0, arr[0]);
  }
  return state;
};

const rootReducer = combineReducers({
  Ques: quesReducer,
  QuesNo: quesNoReducer
});

export default rootReducer;

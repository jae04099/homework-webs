import React from "react";
import { makeStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { NativeSelect, Select, InputLabel, MenuItem, CssBaseline } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

const darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });
  
  const lightTheme = createMuiTheme({
    palette: {
      type: "light"
    }
  });
const useStyles = makeStyles((theme) => ({
    formControl: {
        marginBottom: theme.spacing(5),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        backgroundColor: "#3f51b5"
    },
   
     
}));


const Category = ({ cardData, setCategory, themeMode }) => {
    const getCategoryHandler = (e) => {
        setCategory(e.target.value);
    };
    const classes = useStyles();
    return (
        console.log(themeMode),
        <MuiThemeProvider theme={themeMode == 'dark' ? darkTheme : lightTheme}>
        <div className="category-wrap" >
            <FormControl className={classes.formControl} >
                <InputLabel className={classes.root} htmlFor="age-native-helper">분야</InputLabel>
                <NativeSelect className={classes.root} onChange={getCategoryHandler}>
                    <option value={"countAll"}>전체</option>
                    <option value={"countDesign"}>디자인</option>
                    <option value={"countTeam"}>팀플</option>
                    <option value={"countReport"}>레포트</option>
                    <option value={"countStat"}>통계</option>
                    <option value={"countCS"}>컴공</option>
                    <option value={"countEx"}>기타</option>
                </NativeSelect>
            </FormControl>
        </div>
        </MuiThemeProvider>
    );
};

export default Category;

{
    /* <InputLabel id="label">Age</InputLabel>
            <NativeSelect id="select">
                <option value="10">Ten</option>
                <option value="20">Twenty</option>
            </NativeSelect> */
}

// <ul className="categories">
//                 <li onClick={getCategoryHandler} className="countAll">
//                     전체
//                     <span className="countAll">{`(${cardData.length})`}</span>
//                 </li>
//                 <li onClick={getCategoryHandler} className="countDesign">
//                     디자인
//                     <span className="countDesign">{`(${cardData.length})`}</span>
//                 </li>
//                 <li onClick={getCategoryHandler} className="countTeam">
//                     팀플<span className="countTeam">()</span>
//                 </li>
//                 <li onClick={getCategoryHandler} className="countReport">
//                     레포트<span className="countReport">()</span>
//                 </li>
//                 <li onClick={getCategoryHandler} className="countStat">
//                     통계<span className="countStat">()</span>
//                 </li>
//                 <li onClick={getCategoryHandler} className="countCS">
//                     컴공<span className="countCS">()</span>
//                 </li>
//                 <li onClick={getCategoryHandler} className="countEx">
//                     그외<span className="countEx">()</span>
//                 </li>
//             </ul>

// const [state, setState] = React.useState({
//     age: '',
//     name: 'hai',
//   });

//   const handleChange = (event) => {
//     const name = event.target.name;
//     setState({
//       ...state,
//       [name]: event.target.value,
//     });
//     console.log(state)
//   };

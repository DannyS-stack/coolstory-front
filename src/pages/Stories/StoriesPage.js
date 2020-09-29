import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchHomePage } from "../../store/homePage/actions";
import {
  selectHomePage,
  selectHomepages,
  sortedStories,
} from "../../store/homePage/selectors";

export default function StoriesPage() {
  const route_parameters = useParams();
  const queryParams = route_parameters.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePage());
  }, [dispatch]);

  const pageToMapOver = useSelector(selectHomePage(queryParams));

  // const sortedStories = pageToMapOver
  //   ? pageToMapOver.stories.sort(function (a, b) {
  //       return a - b;
  //     })
  //   : [];
  // console.log(sortedStories);

  return (
    <div>
      {pageToMapOver ? (
        pageToMapOver.stories.map((s) => {
          return (
            <div
              style={{
                backgroundColor: pageToMapOver.backgroundColor,
                color: pageToMapOver.color,
              }}
            >
              <h1>{s.name}</h1>
              <p>{s.content}</p>
            </div>
          );
        })
      ) : (
        <div>loading </div>
      )}
    </div>
  );
}

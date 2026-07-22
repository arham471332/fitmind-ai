import React, { createContext, useState, useContext, useEffect } from 'react';

const FitnessContext = createContext();

export function FitnessProvider({ children }) {
  // Global User State
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('fitmind_user');
    return savedUser ? JSON.parse(savedUser) : null;
  }); // null means logged out
  
  useEffect(() => {
    if (user) {
      localStorage.setItem('fitmind_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('fitmind_user');
    }
  }, [user]);
  
  // Global Diet State
  const [foods, setFoods] = useState([]);
  const [fitnessGoal, setFitnessGoal] = useState("Weight Loss");

  // Global Workout State
  const [workoutLevel, setWorkoutLevel] = useState("Beginner");

  // Calculated Metrics
  const totalCalories = foods.reduce((total, item) => total + Number(item.cal), 0);
  
  // A mock diet score based on calories (e.g. closer to 2000 is better)
  let dietScore = 100;
  if (totalCalories > 0) {
    const diff = Math.abs(2000 - totalCalories);
    dietScore = Math.max(0, 100 - (diff / 20));
  } else {
    dietScore = 0; // if no food, 0
  }

  // A mock workout progress metric
  const workoutProgress = workoutLevel === "Advanced" ? 85 : workoutLevel === "Intermediate" ? 60 : 30;

  const addFood = (foodName, calories) => {
    setFoods([...foods, { name: foodName, cal: calories }]);
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    foods,
    addFood,
    totalCalories,
    dietScore: Math.round(dietScore),
    fitnessGoal,
    setFitnessGoal,
    workoutLevel,
    setWorkoutLevel,
    workoutProgress
  };

  return (
    <FitnessContext.Provider value={value}>
      {children}
    </FitnessContext.Provider>
  );
}

export function useFitnessContext() {
  return useContext(FitnessContext);
}

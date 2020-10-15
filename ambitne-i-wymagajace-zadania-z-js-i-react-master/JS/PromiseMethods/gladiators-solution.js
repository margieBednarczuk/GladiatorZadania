// Rozwiązanie opracował Gladiator JS - gh: zygmax23
// rozwiązanie nie testowane pod większe ilości danych

// Wszystkie metody do promisów logikę mają bardzo prostą
// więc opis tutaj tylko implementacji Promise.all

const promiseAll = (input) => {
  const inputIsAnArray = Array.isArray(input);

  return new Promise((resolve, reject) => {
    if (!inputIsAnArray) reject(new TypeError(`input data is not an array`));

    const isArrayEmpty = input.length === 0;
    if (isArrayEmpty) resolve([]);

    let resolved = new Array(input.length);
    let resolvedCounter = 0;

    input.forEach((entry, index) => {
      const allPromisesResolved = resolvedCounter === input.length
      // można sprawdzać czy entry jest promisą
      // lub przekazać entry do Promise.resolve(entry)
      if (entry instanceof Promise) {
        entry
          .then((data) => {
            resolved[index] = data;
            resolvedCounter += 1;
            if (allPromisesResolved) resolve(resolved);
          })
          .catch((error) => reject(error));
      } else {
        resolved[index] = input[index];
        resolvedCounter += 1;
        if (allPromisesResolved) resolve(resolved);
      }
    });
  });
};

export default promiseAll;

// użycie
// const isIntersecting = useIntersectionObserver(refToComponent, intersectionObserverOptions)
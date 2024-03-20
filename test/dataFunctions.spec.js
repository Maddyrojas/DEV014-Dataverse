import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


describe('testDataFunctions', () => {
  const expectedFilter = [{// 01_Volcán Arenal
    "id": "01_lugarTuristico",
    "name": "Volcán Arenal",
    "location": "Alajuela",
    "shortDescription": "Impresionante volcán activo con vistas panorámicas.",
    "tipoTurismo": "turismo de aventura",
    "gastoPromedio": 150,
  },];
  const expectedSort = [{//02_Parque Nacional Manuel Antonio
    "id": "02_lugarTuristico",
    "name": "Parque Nacional Manuel Antonio",
    "location": "Puntarenas",
    "shortDescription": "Reserva natural con playas prístinas y diversidad de vida silvestre.",
    "tipoTurismo": "turismo de playa",
    "gastoPromedio": 120,
  },
  {// 01_Volcán Arenal
    "id": "01_lugarTuristico",
    "name": "Volcán Arenal",
    "location": "Alajuela",
    "shortDescription": "Impresionante volcán activo con vistas panorámicas.",
    "tipoTurismo": "turismo de aventura",
    "gastoPromedio": 150,
  },]
  it('devuelve `filterData` con array de objetos key:value', () => {
    expect(filterData(fakeData, 'location', 'Alajuela')).toEqual(expectedFilter);
  });
  it('devuelve `SortOf` con un array ordenado de objetos key:value', () => {
    expect(sortData(fakeData, 'name', 'asc')).toEqual(expectedSort);
  })
});
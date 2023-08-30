import { createReduxStore, register } from '@wordpress/data';
import reducer from "./reducer";
import * as selectors from './selectors';
import * as actions from './actions';

const store = createReduxStore( 'blocks-course/todos', {
    reducer,
    actions,
    selectors
} );

register( store );

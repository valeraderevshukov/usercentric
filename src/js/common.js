import { DOC, HTMLBODY, LOADED } from './constants';
import components from './components';

DOC.ready(components, HTMLBODY.addClass(LOADED));

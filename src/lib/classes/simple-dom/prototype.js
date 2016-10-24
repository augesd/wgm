import SimpleDom from './constructor';

let protoSimpleDom = SimpleDom.prototype;

import addListener from '../event-emitter/addListener';
import removeListener from '../event-emitter/removeListener';
import emit from '../event-emitter/emit';

protoSimpleDom.addListener    = addListener;
protoSimpleDom.removeListener = removeListener;
protoSimpleDom.emit           = emit;


import find from './find';
import siblings from './siblings';
import prev from './prev';
import next from './next';
import closest from './closest';
import parentsUntil from './parentsUntil';
import val from './val';
import attr from './attr';
import data from './data';
import css from './css';
import addClass from './addClass';
import hasClass from './hasClass';
import removeClass from './removeClass';
import toggleClass from './toggleClass';
import height from './height';
import width from './width';
import position from './position';
import offset from './offset';
import remove from './remove';
import text from './text';
import html from './html';
import append from './append';
import prepend from './prepend';
import insertBefore from './insertBefore';
import insertAfter from './insertAfter';
import is from './is';
import on from './on';
import off from './off';
import trigger from './trigger';
import once from './once';
import each from './each';
import empty from './empty';

protoSimpleDom.find         = find;
protoSimpleDom.siblings     = siblings;
protoSimpleDom.prev         = prev;
protoSimpleDom.next         = next;
protoSimpleDom.closest      = closest;
protoSimpleDom.parentsUntil = parentsUntil;
protoSimpleDom.val          = val;
protoSimpleDom.attr         = attr;
protoSimpleDom.data         = data;
protoSimpleDom.css          = css;
protoSimpleDom.addClass     = addClass;
protoSimpleDom.hasClass     = hasClass;
protoSimpleDom.removeClass  = removeClass;
protoSimpleDom.toggleClass  = toggleClass;
protoSimpleDom.height       = height;
protoSimpleDom.width        = width;
protoSimpleDom.position     = position;
protoSimpleDom.offset       = offset;
protoSimpleDom.remove       = remove;
protoSimpleDom.text         = text;
protoSimpleDom.html         = html;
protoSimpleDom.append       = append;
protoSimpleDom.prepend      = prepend;
protoSimpleDom.insertBefore = insertBefore;
protoSimpleDom.insertAfter  = insertAfter;
protoSimpleDom.is           = is;
protoSimpleDom.on           = on;
protoSimpleDom.off          = off;
protoSimpleDom.trigger      = trigger;
protoSimpleDom.once         = once;
protoSimpleDom.each         = each;
protoSimpleDom.empty        = empty;

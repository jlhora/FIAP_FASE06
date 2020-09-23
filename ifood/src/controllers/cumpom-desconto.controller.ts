// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

// ---------- ADD IMPORTS -------------
import {authenticate} from '@loopback/authentication';
// ------------------------------------
@authenticate('jwt') // <---- Apply the @authenticate decorator at the class level
export class CumpomDescontoController {
  constructor() {}
}

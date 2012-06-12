/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * Instant actions are immediate actions. They don't have a duration like
 * the CCIntervalAction actions.
 * @class
 * @extends cc.FiniteTimeAction
 */
cc.ActionInstant = cc.FiniteTimeAction.extend(/** @lends cc.ActionInstant# */{
    /**
     * @return {Boolean}
     */
    isDone:function () {
        return true;
    },

    /**
     * @param {Number} dt
     */
    step:function (dt) {
        this.update(1);
    },

    /**
     * @param {Number} time
     */
    update:function (time) {
        //cc.UNUSED_PARAM(time);
    }
});

/**  Show the node
 * @class
 * @extends cc.ActionInstant
 */
cc.Show = cc.ActionInstant.extend(/** @lends cc.Show# */{
    /**
     * @param {cc.Node} target
     */
    startWithTarget:function (target) {
        this._super(target);
        target.setIsVisible(true);
    },

    /**
     * @return {cc.FiniteTimeAction}
     */
    reverse:function () {
        return cc.Hide.create.call(this);
    }
});
/**
 * @return {cc.Show}
 * @example
 * // example
 * var showAction = cc.Show.create();
 */
cc.Show.create = function () {
    return new cc.Show();
};

/**
 * Hide the node
 * @class
 * @extends cc.ActionInstant
 */
cc.Hide = cc.ActionInstant.extend(/** @lends cc.Hide# */{
    /**
     * @param {cc.Node} target
     */
    startWithTarget:function (target) {
        this._super(target);
        target.setIsVisible(false);
    },

    /**
     * @return {cc.FiniteTimeAction}
     */
    reverse:function () {
        return cc.Show.create.call(this);
    }
});
/**
 * @return {cc.Hide}
 * @example
 * // example
 * var hideAction = cc.Hide.create();
 */
cc.Hide.create = function () {
    return (new cc.Hide());
};


/** Toggles the visibility of a node
 * @class
 * @extends cc.ActionInstant
 */
cc.ToggleVisibility = cc.ActionInstant.extend(/** @lends cc.ToggleVisibility# */{
    /**
     * @param {cc.Node} target
     */
    startWithTarget:function (target) {
        this._super();
        target.setIsVisible(!target.getIsVisible());
    },

    /**
     * @return {cc.ToggleVisibility}
     */
    reverse:function () {
        return new cc.ToggleVisibility();
    }
});

/**
 * @return {cc.ToggleVisibility}
 * @example
 * // example
 * var toggleVisibilityAction = cc.ToggleVisibility.create();
 */
cc.ToggleVisibility.create = function () {
    return (new cc.ToggleVisibility());
};

/**
 * Flips the sprite horizontally
 * @class
 * @extends cc.ActionInstant
 */
cc.FlipX = cc.ActionInstant.extend(/** @lends cc.FlipX# */{
    /**
     * @param {Boolean} x
     * @return {Boolean}
     */
    initWithFlipX:function (x) {
        this._flipX = x;
        return true;
    },

    /**
     * @param {cc.Node} target
     */
    startWithTarget:function (target) {
        this._super();
        target.setFlipX(this._flipX);
    },

    /**
     * @return {cc.FiniteTimeAction}
     */
    reverse:function () {
        return this.actionWithFlipX(!this._flipX);
    },
    _flipX:false
});

/**
 * @param {Boolean} x
 * @return {cc.FlipX}
 * var flipXAction = cc.FlipX.create(true);
 */
cc.FlipX.create = function (x) {
    var ret = new cc.FlipX();
    if (ret.initWithFlipX(x))
        return ret;
};

/**
 * Flips the sprite vertically
 * @class
 * @extends cc.ActionInstant
 */
cc.FlipY = cc.ActionInstant.extend(/** @lends cc.FlipY# */{
    /**
     * @param {Boolean} Y
     * @return {Boolean}
     */
    initWithFlipY:function (Y) {
        this._flipY = Y;
        return true;
    },

    /**
     * @param {cc.Node} target
     */
    startWithTarget:function (target) {
        this._super();
        target.setFlipY(this._flipY);
    },

    /**
     * @return {cc.FiniteTimeAction}
     */
    reverse:function () {
        return this.actionWithFlipY(!this._flipY);
    },
    _flipY:false
});
/**
 * @param {Boolean} y
 * @return {cc.FlipY}
 * @example
 * // example
 * var flipYAction = cc.FlipY.create();
 */
cc.FlipY.create = function (y) {
    var ret = new cc.FlipY();
    if (ret.initWithFlipY(y))
        return ret;
};


/** Places the node in a certain position
 * @class
 * @extends cc.ActionInstant
 */
cc.Place = cc.ActionInstant.extend(/** @lends cc.Place# */{
    /** Initializes a Place action with a position
     * @param {cc.Point} pos
     * @return {Boolean}
     */
    initWithPosition:function (pos) {
        this._position = pos;
        return true;
    },

    /**
     * @param {cc.Node} target
     */
    startWithTarget:function (target) {
        this._super(target);
        this._target.setPosition(this._position);
    }
});
/** creates a Place action with a position
 * @param {cc.Point} pos
 * @return {cc.Place}
 * @example
 * // example
 * var placeAction = cc.Place.create(cc.PointMake(200, 200));
 */
cc.Place.create = function (pos) {
    var ret = new cc.Place();
    ret.initWithPosition(pos);
    return ret;
};


/** Calls a 'callback'
 * @class
 * @extends cc.ActionInstant
 */
cc.CallFunc = cc.ActionInstant.extend(/** @lends cc.CallFunc# */{
    /**
     * @param {object} selectorTarget
     * @param {function} selector
     * @param {*} d data for function, it accepts all data types.
     * @return {Boolean}
     */
    initWithTarget:function (selectorTarget, selector, d) {
        this._data = d || null;
        this._callFunc = selector || null;
        this._selectorTarget = selectorTarget || null;
        return true;
    },

    /**
     * execute the function.
     */
    execute:function () {
        if (this._callFunc != null)//CallFunc, N, ND
        {
            this._callFunc.call(this._selectorTarget, this._target, this._data);
        }
    },

    /**
     * @param {cc.Node} target
     */
    startWithTarget:function (target) {
        this._super(target);
        this.execute();
    },

    /**
     * @return {object}
     */
    getTargetCallback:function () {
        return this._selectorTarget;
    },

    /**
     * @param {object} pSel
     */
    setTargetCallback:function (pSel) {
        if (pSel != this._selectorTarget) {
            if (this._selectorTarget) {
                this._selectorTarget = null;
            }
            this._selectorTarget = pSel;
        }
    },
    _selectorTarget:null,
    _callFunc:null
});
/** creates the action with the callback
 * @param {object} selectorTarget
 * @param {function|NULL} selector
 * @param {*|Null} d
 * @return {cc.CallFunc}
 * @example
 * // example
 * // CallFunc without data
 * var finish = cc.CallFunc.create(this, this.removeSprite);
 *
 * // CallFunc with data
 * var finish = cc.CallFunc.create(this._grossini, this.removeFromParentAndCleanup, true),
 */

cc.CallFunc.create = function (selectorTarget, selector, d) {
    var ret = new cc.CallFunc();
    if (ret && ret.initWithTarget(selectorTarget, selector, d)) {
        ret._callFunc = selector;
        return ret;
    }
    return null;
};
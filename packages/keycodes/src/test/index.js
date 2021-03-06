/**
 * Internal dependencies
 */
import {
	displayShortcutList,
	displayShortcut,
	rawShortcut,
} from '../';

const isAppleOSFalse = () => false;
const isAppleOSTrue = () => true;

describe( 'displayShortcutList', () => {
	describe( 'primary', () => {
		it( 'should output [ Ctrl, +, M ] on Windows', () => {
			const shortcut = displayShortcutList.primary( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( [ 'Ctrl', '+', 'M' ] );
		} );

		it( 'should output [ ⌘, M ] on MacOS', () => {
			const shortcut = displayShortcutList.primary( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( [ '⌘', 'M' ] );
		} );

		it( 'outputs [ ⌘, Del ] on MacOS (works for multiple character keys)', () => {
			const shortcut = displayShortcutList.primary( 'del', isAppleOSTrue );
			expect( shortcut ).toEqual( [ '⌘', 'Del' ] );
		} );
	} );

	describe( 'primaryShift', () => {
		it( 'should output [ Ctrl, +, Shift, +, M ] on Windows', () => {
			const shortcut = displayShortcutList.primaryShift( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( [ 'Ctrl', '+', 'Shift', '+', 'M' ] );
		} );

		it( 'should output [ Shift, +, ⌘, M ] on MacOS', () => {
			const shortcut = displayShortcutList.primaryShift( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( [ 'Shift', '+', '⌘', 'M' ] );
		} );

		it( 'outputs [ Shift, +, ⌘, Del ] on MacOS (works for multiple character keys)', () => {
			const shortcut = displayShortcutList.primaryShift( 'del', isAppleOSTrue );
			expect( shortcut ).toEqual( [ 'Shift', '+', '⌘', 'Del' ] );
		} );
	} );

	describe( 'secondary', () => {
		it( 'should output [ Ctrl, +, Shift, +, Alt ] text on Windows', () => {
			const shortcut = displayShortcutList.secondary( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( [ 'Ctrl', '+', 'Shift', '+', 'Alt', '+', 'M' ] );
		} );

		it( 'should output [ Shift, +, Option, +, Command, M ] on MacOS', () => {
			const shortcut = displayShortcutList.secondary( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( [ 'Shift', '+', 'Option', '+', '⌘', 'M' ] );
		} );
	} );

	describe( 'access', () => {
		it( 'should output [ Shift, +, Alt, +, M ] on Windows', () => {
			const shortcut = displayShortcutList.access( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( [ 'Shift', '+', 'Alt', '+', 'M' ] );
		} );

		it( 'should output [Ctrl, +, Option, +, M ] on MacOS', () => {
			const shortcut = displayShortcutList.access( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( [ 'Ctrl', '+', 'Option', '+', 'M' ] );
		} );
	} );
} );

describe( 'displayShortcut', () => {
	describe( 'primary', () => {
		it( 'should output Control text on Windows', () => {
			const shortcut = displayShortcut.primary( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( 'Ctrl+M' );
		} );

		it( 'should output command symbol on MacOS', () => {
			const shortcut = displayShortcut.primary( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( '⌘M' );
		} );

		it( 'outputs command Del on MacOS (works for multiple character keys)', () => {
			const shortcut = displayShortcut.primary( 'del', isAppleOSTrue );
			expect( shortcut ).toEqual( '⌘Del' );
		} );
	} );

	describe( 'primaryShift', () => {
		it( 'should output Ctrl+Shift text on Windows', () => {
			const shortcut = displayShortcut.primaryShift( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( 'Ctrl+Shift+M' );
		} );

		it( 'should output shift+command symbols on MacOS', () => {
			const shortcut = displayShortcut.primaryShift( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( 'Shift+⌘M' );
		} );

		it( 'outputs shift+command Del on MacOS (works for multiple character keys)', () => {
			const shortcut = displayShortcut.primaryShift( 'del', isAppleOSTrue );
			expect( shortcut ).toEqual( 'Shift+⌘Del' );
		} );
	} );

	describe( 'secondary', () => {
		it( 'should output Ctrl+Shift+Alt text on Windows', () => {
			const shortcut = displayShortcut.secondary( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( 'Ctrl+Shift+Alt+M' );
		} );

		it( 'should output shift+option+command symbols on MacOS', () => {
			const shortcut = displayShortcut.secondary( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( 'Shift+Option+⌘M' );
		} );
	} );

	describe( 'access', () => {
		it( 'should output Shift+Alt text on Windows', () => {
			const shortcut = displayShortcut.access( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( 'Shift+Alt+M' );
		} );

		it( 'should output control+option symbols on MacOS', () => {
			const shortcut = displayShortcut.access( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( 'Ctrl+Option+M' );
		} );
	} );
} );

describe( 'rawShortcut', () => {
	describe( 'primary', () => {
		it( 'should output ctrl on Windows', () => {
			const shortcut = rawShortcut.primary( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( 'ctrl+m' );
		} );

		it( 'should output meta on MacOS', () => {
			const shortcut = rawShortcut.primary( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( 'meta+m' );
		} );
	} );

	describe( 'primaryShift', () => {
		it( 'should output ctrl+shift on Windows', () => {
			const shortcut = rawShortcut.primaryShift( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( 'ctrl+shift+m' );
		} );

		it( 'should output shift+meta on MacOS', () => {
			const shortcut = rawShortcut.primaryShift( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( 'shift+meta+m' );
		} );
	} );

	describe( 'secondary', () => {
		it( 'should output ctrl+shift+alt on Windows', () => {
			const shortcut = rawShortcut.secondary( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( 'ctrl+shift+alt+m' );
		} );

		it( 'should output shift+alt+meta on MacOS', () => {
			const shortcut = rawShortcut.secondary( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( 'shift+alt+meta+m' );
		} );
	} );

	describe( 'access', () => {
		it( 'should output shift+alt on Windows', () => {
			const shortcut = rawShortcut.access( 'm', isAppleOSFalse );
			expect( shortcut ).toEqual( 'shift+alt+m' );
		} );

		it( 'should output ctrl+alt on MacOS', () => {
			const shortcut = rawShortcut.access( 'm', isAppleOSTrue );
			expect( shortcut ).toEqual( 'ctrl+alt+m' );
		} );
	} );
} );

/**
 * Represents a 2D point in a Cartesian coordinate system.
 */
type Point = {
    x: number,
    y: number
}

/**
 * Utility class for common operations on {@link Point} objects and arrays of points.
 *
 * Provides methods for equality checks, comparison, cloning, and searching.
 */
class PointUtil {
    /**
     * Checks if two points are equal (same x and y coordinates).
     *
     * @param p1 - First point
     * @param p2 - Second point
     * @returns `true` if both points have the same coordinates, otherwise `false`
     */
    public static arePointsEqual(p1: Point, p2: Point): boolean {
        return p1.x === p2.x && p1.y === p2.y;
    }

    /**
     * Compares two points for ordering.
     *
     * - First compares `x` values.
     * - If `x` values are equal, compares `y` values.
     *
     * @param p1 - First point
     * @param p2 - Second point
     * @returns Negative if `p1 < p2`, positive if `p1 > p2`, or zero if equal
     */
    public static compare(p1: Point, p2: Point): number {
        return p1.x === p2.x ? p1.y - p2.y : p1.x - p2.x;
    }

    /**
     * Creates a shallow copy of a point.
     *
     * @param p - The point to clone
     * @returns A new {@link Point} with the same coordinates
     */
    public static clone(p: Point): Point {
        return {x: p.x, y: p.y};
    }

    /**
     * Checks whether two arrays of points contain the same set of points,
     * regardless of order.
     *
     * @param pArrA - First array of points
     * @param pArrB - Second array of points
     * @returns `true` if arrays have the same points, otherwise `false`
     */
    public static arePointArraysEqual(pArrA: Point[], pArrB: Point[]): boolean {
        if (pArrA.length !== pArrB.length) {
            return false;
        }
        const sortedA = pArrA.slice().sort((p1, p2) => PointUtil.compare(p1, p2));
        const sortedB = pArrB.slice().sort((p1, p2) => PointUtil.compare(p1, p2));
        return sortedA.every((point, i) =>
            PointUtil.arePointsEqual(point, sortedB[i])
        );
    }

    /**
     * Checks if an array of points contains a given point.
     *
     * @param pArr - Array of points to search
     * @param p - The point to look for
     * @returns `true` if the array contains the point, otherwise `false`
     */
    public static contains(pArr: Point[], p:Point): boolean{
        for (const elem of pArr){
            if (PointUtil.arePointsEqual(elem,p)){
                return true;
            }
        }
        return false;
    }
}